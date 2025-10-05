import { CognitoIdentityProviderClient, AdminCreateUserCommand, AdminAddUserToGroupCommand, AdminSetUserPasswordCommand } from "@aws-sdk/client-cognito-identity-provider";

const client = new CognitoIdentityProviderClient({ region: 'eu-central-1' });
const userPoolId = 'eu-central-1_dOvU8NmPK';

const testUsers = [
  {
    username: 'admin@rassooq.com',
    email: 'admin@rassooq.com',
    group: 'admin',
    temporaryPassword: 'TempPass123!',
    permanentPassword: 'AdminPass123!'
  },
  {
    username: 'seller@rassooq.com', 
    email: 'seller@rassooq.com',
    group: 'seller',
    temporaryPassword: 'TempPass123!',
    permanentPassword: 'SellerPass123!'
  },
  {
    username: 'buyer@rassooq.com',
    email: 'buyer@rassooq.com', 
    group: 'buyer',
    temporaryPassword: 'TempPass123!',
    permanentPassword: 'BuyerPass123!'
  }
];

async function createTestUsers() {
  console.log('Creating test users...');
  
  for (const user of testUsers) {
    try {
      // Create user
      console.log(`Creating user: ${user.username}`);
      const createUserCommand = new AdminCreateUserCommand({
        UserPoolId: userPoolId,
        Username: user.username,
        UserAttributes: [
          {
            Name: 'email',
            Value: user.email
          },
          {
            Name: 'email_verified',
            Value: 'true'
          }
        ],
        TemporaryPassword: user.temporaryPassword,
        MessageAction: 'SUPPRESS' // Don't send welcome email
      });
      
      await client.send(createUserCommand);
      console.log(`✓ Created user: ${user.username}`);
      
      // Set permanent password
      const setPasswordCommand = new AdminSetUserPasswordCommand({
        UserPoolId: userPoolId,
        Username: user.username,
        Password: user.permanentPassword,
        Permanent: true
      });
      
      await client.send(setPasswordCommand);
      console.log(`✓ Set permanent password for: ${user.username}`);
      
      // Add to group
      const addToGroupCommand = new AdminAddUserToGroupCommand({
        UserPoolId: userPoolId,
        Username: user.username,
        GroupName: user.group
      });
      
      await client.send(addToGroupCommand);
      console.log(`✓ Added ${user.username} to group: ${user.group}`);
      
    } catch (error) {
      if (error.name === 'UsernameExistsException') {
        console.log(`- User ${user.username} already exists`);
        
        // Still try to add to group in case that wasn't done
        try {
          const addToGroupCommand = new AdminAddUserToGroupCommand({
            UserPoolId: userPoolId,
            Username: user.username,
            GroupName: user.group
          });
          await client.send(addToGroupCommand);
          console.log(`✓ Added existing user ${user.username} to group: ${user.group}`);
        } catch (groupError) {
          if (groupError.name !== 'ResourceExistsException') {
            console.error(`Error adding ${user.username} to group:`, groupError.message);
          }
        }
      } else {
        console.error(`Error creating user ${user.username}:`, error.message);
      }
    }
  }
  
  console.log('\nTest users created successfully!');
  console.log('\nLogin credentials:');
  console.log('==================');
  testUsers.forEach(user => {
    console.log(`${user.group.toUpperCase()}: ${user.username} / ${user.permanentPassword}`);
  });
}

createTestUsers().catch(console.error);


