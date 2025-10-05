/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import {
  Button,
  Flex,
  Grid,
  SelectField,
  TextField,
} from "@aws-amplify/ui-react";
import { fetchByPath, getOverrideProps, validateField } from "./utils";
import { generateClient } from "aws-amplify/api";
import { getAdminLog } from "../graphql/queries";
import { updateAdminLog } from "../graphql/mutations";
const client = generateClient();
export default function AdminLogUpdateForm(props) {
  const {
    id: idProp,
    adminLog: adminLogModelProp,
    onSuccess,
    onError,
    onSubmit,
    onValidate,
    onChange,
    overrides,
    ...rest
  } = props;
  const initialValues = {
    adminId: "",
    adminEmail: "",
    actionType: "",
    description: "",
    targetType: "",
    targetId: "",
    metadata: "",
    ipAddress: "",
    userAgent: "",
    createdAt: "",
    updatedAt: "",
  };
  const [adminId, setAdminId] = React.useState(initialValues.adminId);
  const [adminEmail, setAdminEmail] = React.useState(initialValues.adminEmail);
  const [actionType, setActionType] = React.useState(initialValues.actionType);
  const [description, setDescription] = React.useState(
    initialValues.description
  );
  const [targetType, setTargetType] = React.useState(initialValues.targetType);
  const [targetId, setTargetId] = React.useState(initialValues.targetId);
  const [metadata, setMetadata] = React.useState(initialValues.metadata);
  const [ipAddress, setIpAddress] = React.useState(initialValues.ipAddress);
  const [userAgent, setUserAgent] = React.useState(initialValues.userAgent);
  const [createdAt, setCreatedAt] = React.useState(initialValues.createdAt);
  const [updatedAt, setUpdatedAt] = React.useState(initialValues.updatedAt);
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    const cleanValues = adminLogRecord
      ? { ...initialValues, ...adminLogRecord }
      : initialValues;
    setAdminId(cleanValues.adminId);
    setAdminEmail(cleanValues.adminEmail);
    setActionType(cleanValues.actionType);
    setDescription(cleanValues.description);
    setTargetType(cleanValues.targetType);
    setTargetId(cleanValues.targetId);
    setMetadata(cleanValues.metadata);
    setIpAddress(cleanValues.ipAddress);
    setUserAgent(cleanValues.userAgent);
    setCreatedAt(cleanValues.createdAt);
    setUpdatedAt(cleanValues.updatedAt);
    setErrors({});
  };
  const [adminLogRecord, setAdminLogRecord] = React.useState(adminLogModelProp);
  React.useEffect(() => {
    const queryData = async () => {
      const record = idProp
        ? (
            await client.graphql({
              query: getAdminLog.replaceAll("__typename", ""),
              variables: { id: idProp },
            })
          )?.data?.getAdminLog
        : adminLogModelProp;
      setAdminLogRecord(record);
    };
    queryData();
  }, [idProp, adminLogModelProp]);
  React.useEffect(resetStateValues, [adminLogRecord]);
  const validations = {
    adminId: [{ type: "Required" }],
    adminEmail: [{ type: "Required" }, { type: "Email" }],
    actionType: [{ type: "Required" }],
    description: [{ type: "Required" }],
    targetType: [],
    targetId: [],
    metadata: [],
    ipAddress: [],
    userAgent: [],
    createdAt: [],
    updatedAt: [],
  };
  const runValidationTasks = async (
    fieldName,
    currentValue,
    getDisplayValue
  ) => {
    const value =
      currentValue && getDisplayValue
        ? getDisplayValue(currentValue)
        : currentValue;
    let validationResponse = validateField(value, validations[fieldName]);
    const customValidator = fetchByPath(onValidate, fieldName);
    if (customValidator) {
      validationResponse = await customValidator(value, validationResponse);
    }
    setErrors((errors) => ({ ...errors, [fieldName]: validationResponse }));
    return validationResponse;
  };
  const convertToLocal = (date) => {
    const df = new Intl.DateTimeFormat("default", {
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
      hour: "2-digit",
      minute: "2-digit",
      calendar: "iso8601",
      numberingSystem: "latn",
      hourCycle: "h23",
    });
    const parts = df.formatToParts(date).reduce((acc, part) => {
      acc[part.type] = part.value;
      return acc;
    }, {});
    return `${parts.year}-${parts.month}-${parts.day}T${parts.hour}:${parts.minute}`;
  };
  return (
    <Grid
      as="form"
      rowGap="15px"
      columnGap="15px"
      padding="20px"
      onSubmit={async (event) => {
        event.preventDefault();
        let modelFields = {
          adminId,
          adminEmail,
          actionType,
          description,
          targetType: targetType ?? null,
          targetId: targetId ?? null,
          metadata: metadata ?? null,
          ipAddress: ipAddress ?? null,
          userAgent: userAgent ?? null,
          createdAt: createdAt ?? null,
          updatedAt: updatedAt ?? null,
        };
        const validationResponses = await Promise.all(
          Object.keys(validations).reduce((promises, fieldName) => {
            if (Array.isArray(modelFields[fieldName])) {
              promises.push(
                ...modelFields[fieldName].map((item) =>
                  runValidationTasks(fieldName, item)
                )
              );
              return promises;
            }
            promises.push(
              runValidationTasks(fieldName, modelFields[fieldName])
            );
            return promises;
          }, [])
        );
        if (validationResponses.some((r) => r.hasError)) {
          return;
        }
        if (onSubmit) {
          modelFields = onSubmit(modelFields);
        }
        try {
          Object.entries(modelFields).forEach(([key, value]) => {
            if (typeof value === "string" && value === "") {
              modelFields[key] = null;
            }
          });
          await client.graphql({
            query: updateAdminLog.replaceAll("__typename", ""),
            variables: {
              input: {
                id: adminLogRecord.id,
                ...modelFields,
              },
            },
          });
          if (onSuccess) {
            onSuccess(modelFields);
          }
        } catch (err) {
          if (onError) {
            const messages = err.errors.map((e) => e.message).join("\n");
            onError(modelFields, messages);
          }
        }
      }}
      {...getOverrideProps(overrides, "AdminLogUpdateForm")}
      {...rest}
    >
      <TextField
        label="Admin id"
        isRequired={true}
        isReadOnly={false}
        value={adminId}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              adminId: value,
              adminEmail,
              actionType,
              description,
              targetType,
              targetId,
              metadata,
              ipAddress,
              userAgent,
              createdAt,
              updatedAt,
            };
            const result = onChange(modelFields);
            value = result?.adminId ?? value;
          }
          if (errors.adminId?.hasError) {
            runValidationTasks("adminId", value);
          }
          setAdminId(value);
        }}
        onBlur={() => runValidationTasks("adminId", adminId)}
        errorMessage={errors.adminId?.errorMessage}
        hasError={errors.adminId?.hasError}
        {...getOverrideProps(overrides, "adminId")}
      ></TextField>
      <TextField
        label="Admin email"
        isRequired={true}
        isReadOnly={false}
        value={adminEmail}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              adminId,
              adminEmail: value,
              actionType,
              description,
              targetType,
              targetId,
              metadata,
              ipAddress,
              userAgent,
              createdAt,
              updatedAt,
            };
            const result = onChange(modelFields);
            value = result?.adminEmail ?? value;
          }
          if (errors.adminEmail?.hasError) {
            runValidationTasks("adminEmail", value);
          }
          setAdminEmail(value);
        }}
        onBlur={() => runValidationTasks("adminEmail", adminEmail)}
        errorMessage={errors.adminEmail?.errorMessage}
        hasError={errors.adminEmail?.hasError}
        {...getOverrideProps(overrides, "adminEmail")}
      ></TextField>
      <SelectField
        label="Action type"
        placeholder="Please select an option"
        isDisabled={false}
        value={actionType}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              adminId,
              adminEmail,
              actionType: value,
              description,
              targetType,
              targetId,
              metadata,
              ipAddress,
              userAgent,
              createdAt,
              updatedAt,
            };
            const result = onChange(modelFields);
            value = result?.actionType ?? value;
          }
          if (errors.actionType?.hasError) {
            runValidationTasks("actionType", value);
          }
          setActionType(value);
        }}
        onBlur={() => runValidationTasks("actionType", actionType)}
        errorMessage={errors.actionType?.errorMessage}
        hasError={errors.actionType?.hasError}
        {...getOverrideProps(overrides, "actionType")}
      >
        <option
          children="User created"
          value="USER_CREATED"
          {...getOverrideProps(overrides, "actionTypeoption0")}
        ></option>
        <option
          children="User updated"
          value="USER_UPDATED"
          {...getOverrideProps(overrides, "actionTypeoption1")}
        ></option>
        <option
          children="User deleted"
          value="USER_DELETED"
          {...getOverrideProps(overrides, "actionTypeoption2")}
        ></option>
        <option
          children="Seller approved"
          value="SELLER_APPROVED"
          {...getOverrideProps(overrides, "actionTypeoption3")}
        ></option>
        <option
          children="Seller suspended"
          value="SELLER_SUSPENDED"
          {...getOverrideProps(overrides, "actionTypeoption4")}
        ></option>
        <option
          children="Product removed"
          value="PRODUCT_REMOVED"
          {...getOverrideProps(overrides, "actionTypeoption5")}
        ></option>
        <option
          children="Order modified"
          value="ORDER_MODIFIED"
          {...getOverrideProps(overrides, "actionTypeoption6")}
        ></option>
        <option
          children="Refund processed"
          value="REFUND_PROCESSED"
          {...getOverrideProps(overrides, "actionTypeoption7")}
        ></option>
        <option
          children="System config"
          value="SYSTEM_CONFIG"
          {...getOverrideProps(overrides, "actionTypeoption8")}
        ></option>
      </SelectField>
      <TextField
        label="Description"
        isRequired={true}
        isReadOnly={false}
        value={description}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              adminId,
              adminEmail,
              actionType,
              description: value,
              targetType,
              targetId,
              metadata,
              ipAddress,
              userAgent,
              createdAt,
              updatedAt,
            };
            const result = onChange(modelFields);
            value = result?.description ?? value;
          }
          if (errors.description?.hasError) {
            runValidationTasks("description", value);
          }
          setDescription(value);
        }}
        onBlur={() => runValidationTasks("description", description)}
        errorMessage={errors.description?.errorMessage}
        hasError={errors.description?.hasError}
        {...getOverrideProps(overrides, "description")}
      ></TextField>
      <TextField
        label="Target type"
        isRequired={false}
        isReadOnly={false}
        value={targetType}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              adminId,
              adminEmail,
              actionType,
              description,
              targetType: value,
              targetId,
              metadata,
              ipAddress,
              userAgent,
              createdAt,
              updatedAt,
            };
            const result = onChange(modelFields);
            value = result?.targetType ?? value;
          }
          if (errors.targetType?.hasError) {
            runValidationTasks("targetType", value);
          }
          setTargetType(value);
        }}
        onBlur={() => runValidationTasks("targetType", targetType)}
        errorMessage={errors.targetType?.errorMessage}
        hasError={errors.targetType?.hasError}
        {...getOverrideProps(overrides, "targetType")}
      ></TextField>
      <TextField
        label="Target id"
        isRequired={false}
        isReadOnly={false}
        value={targetId}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              adminId,
              adminEmail,
              actionType,
              description,
              targetType,
              targetId: value,
              metadata,
              ipAddress,
              userAgent,
              createdAt,
              updatedAt,
            };
            const result = onChange(modelFields);
            value = result?.targetId ?? value;
          }
          if (errors.targetId?.hasError) {
            runValidationTasks("targetId", value);
          }
          setTargetId(value);
        }}
        onBlur={() => runValidationTasks("targetId", targetId)}
        errorMessage={errors.targetId?.errorMessage}
        hasError={errors.targetId?.hasError}
        {...getOverrideProps(overrides, "targetId")}
      ></TextField>
      <TextField
        label="Metadata"
        isRequired={false}
        isReadOnly={false}
        value={metadata}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              adminId,
              adminEmail,
              actionType,
              description,
              targetType,
              targetId,
              metadata: value,
              ipAddress,
              userAgent,
              createdAt,
              updatedAt,
            };
            const result = onChange(modelFields);
            value = result?.metadata ?? value;
          }
          if (errors.metadata?.hasError) {
            runValidationTasks("metadata", value);
          }
          setMetadata(value);
        }}
        onBlur={() => runValidationTasks("metadata", metadata)}
        errorMessage={errors.metadata?.errorMessage}
        hasError={errors.metadata?.hasError}
        {...getOverrideProps(overrides, "metadata")}
      ></TextField>
      <TextField
        label="Ip address"
        isRequired={false}
        isReadOnly={false}
        value={ipAddress}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              adminId,
              adminEmail,
              actionType,
              description,
              targetType,
              targetId,
              metadata,
              ipAddress: value,
              userAgent,
              createdAt,
              updatedAt,
            };
            const result = onChange(modelFields);
            value = result?.ipAddress ?? value;
          }
          if (errors.ipAddress?.hasError) {
            runValidationTasks("ipAddress", value);
          }
          setIpAddress(value);
        }}
        onBlur={() => runValidationTasks("ipAddress", ipAddress)}
        errorMessage={errors.ipAddress?.errorMessage}
        hasError={errors.ipAddress?.hasError}
        {...getOverrideProps(overrides, "ipAddress")}
      ></TextField>
      <TextField
        label="User agent"
        isRequired={false}
        isReadOnly={false}
        value={userAgent}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              adminId,
              adminEmail,
              actionType,
              description,
              targetType,
              targetId,
              metadata,
              ipAddress,
              userAgent: value,
              createdAt,
              updatedAt,
            };
            const result = onChange(modelFields);
            value = result?.userAgent ?? value;
          }
          if (errors.userAgent?.hasError) {
            runValidationTasks("userAgent", value);
          }
          setUserAgent(value);
        }}
        onBlur={() => runValidationTasks("userAgent", userAgent)}
        errorMessage={errors.userAgent?.errorMessage}
        hasError={errors.userAgent?.hasError}
        {...getOverrideProps(overrides, "userAgent")}
      ></TextField>
      <TextField
        label="Created at"
        isRequired={false}
        isReadOnly={false}
        type="datetime-local"
        value={createdAt && convertToLocal(new Date(createdAt))}
        onChange={(e) => {
          let value =
            e.target.value === "" ? "" : new Date(e.target.value).toISOString();
          if (onChange) {
            const modelFields = {
              adminId,
              adminEmail,
              actionType,
              description,
              targetType,
              targetId,
              metadata,
              ipAddress,
              userAgent,
              createdAt: value,
              updatedAt,
            };
            const result = onChange(modelFields);
            value = result?.createdAt ?? value;
          }
          if (errors.createdAt?.hasError) {
            runValidationTasks("createdAt", value);
          }
          setCreatedAt(value);
        }}
        onBlur={() => runValidationTasks("createdAt", createdAt)}
        errorMessage={errors.createdAt?.errorMessage}
        hasError={errors.createdAt?.hasError}
        {...getOverrideProps(overrides, "createdAt")}
      ></TextField>
      <TextField
        label="Updated at"
        isRequired={false}
        isReadOnly={false}
        type="datetime-local"
        value={updatedAt && convertToLocal(new Date(updatedAt))}
        onChange={(e) => {
          let value =
            e.target.value === "" ? "" : new Date(e.target.value).toISOString();
          if (onChange) {
            const modelFields = {
              adminId,
              adminEmail,
              actionType,
              description,
              targetType,
              targetId,
              metadata,
              ipAddress,
              userAgent,
              createdAt,
              updatedAt: value,
            };
            const result = onChange(modelFields);
            value = result?.updatedAt ?? value;
          }
          if (errors.updatedAt?.hasError) {
            runValidationTasks("updatedAt", value);
          }
          setUpdatedAt(value);
        }}
        onBlur={() => runValidationTasks("updatedAt", updatedAt)}
        errorMessage={errors.updatedAt?.errorMessage}
        hasError={errors.updatedAt?.hasError}
        {...getOverrideProps(overrides, "updatedAt")}
      ></TextField>
      <Flex
        justifyContent="space-between"
        {...getOverrideProps(overrides, "CTAFlex")}
      >
        <Button
          children="Reset"
          type="reset"
          onClick={(event) => {
            event.preventDefault();
            resetStateValues();
          }}
          isDisabled={!(idProp || adminLogModelProp)}
          {...getOverrideProps(overrides, "ResetButton")}
        ></Button>
        <Flex
          gap="15px"
          {...getOverrideProps(overrides, "RightAlignCTASubFlex")}
        >
          <Button
            children="Submit"
            type="submit"
            variation="primary"
            isDisabled={
              !(idProp || adminLogModelProp) ||
              Object.values(errors).some((e) => e?.hasError)
            }
            {...getOverrideProps(overrides, "SubmitButton")}
          ></Button>
        </Flex>
      </Flex>
    </Grid>
  );
}
