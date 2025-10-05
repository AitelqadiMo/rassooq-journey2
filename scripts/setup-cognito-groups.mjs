#!/usr/bin/env node

/**
 * Setup Cognito User Groups for Rassooq
 * Creates admin, seller, and buyer groups in Cognito User Pool
 */

import {
  CognitoIdentityProviderClient,
  CreateGroupCommand,
  ListGroupsCommand
} from '@aws-sdk/client-cognito-identity-provider';

const USER_POOL_ID = 'eu-central-1_dOvU8NmPK';
const REGION = 'eu-central-1';

const client = new CognitoIdentityProviderClient({ region: REGION });

const groups = [
  {
    GroupName: 'admin',
    Description: 'Administrator users with full platform access',
    Precedence: 1
  },
  {
    GroupName: 'seller',
    Description: 'Seller users with access to seller dashboard',
    Precedence: 2
  },
  {
    GroupName: 'buyer',
    Description: 'Regular buyer users',
    Precedence: 3
  }
];

async function createGroups() {
  console.log('🔐 Setting up Cognito User Groups...\n');

  // Check existing groups
  const listCommand = new ListGroupsCommand({ UserPoolId: USER_POOL_ID });
  const existing = await client.send(listCommand);
  const existingGroupNames = existing.Groups?.map(g => g.GroupName) || [];

  for (const group of groups) {
    if (existingGroupNames.includes(group.GroupName)) {
      console.log(`✅ Group "${group.GroupName}" already exists`);
      continue;
    }

    try {
      const command = new CreateGroupCommand({
        UserPoolId: USER_POOL_ID,
        ...group
      });

      await client.send(command);
      console.log(`✅ Created group: ${group.GroupName}`);
    } catch (error) {
      console.error(`❌ Error creating group ${group.GroupName}:`, error.message);
    }
  }

  console.log('\n✨ Cognito groups setup complete!\n');
}

createGroups().catch(console.error);
