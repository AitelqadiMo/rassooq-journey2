/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import {
  Badge,
  Button,
  Divider,
  Flex,
  Grid,
  Icon,
  ScrollView,
  SelectField,
  SwitchField,
  Text,
  TextField,
  useTheme,
} from "@aws-amplify/ui-react";
import { fetchByPath, getOverrideProps, validateField } from "./utils";
import { generateClient } from "aws-amplify/api";
import { createPromoCode } from "../graphql/mutations";
const client = generateClient();
function ArrayField({
  items = [],
  onChange,
  label,
  inputFieldRef,
  children,
  hasError,
  setFieldValue,
  currentFieldValue,
  defaultFieldValue,
  lengthLimit,
  getBadgeText,
  runValidationTasks,
  errorMessage,
}) {
  const labelElement = <Text>{label}</Text>;
  const {
    tokens: {
      components: {
        fieldmessages: { error: errorStyles },
      },
    },
  } = useTheme();
  const [selectedBadgeIndex, setSelectedBadgeIndex] = React.useState();
  const [isEditing, setIsEditing] = React.useState();
  React.useEffect(() => {
    if (isEditing) {
      inputFieldRef?.current?.focus();
    }
  }, [isEditing]);
  const removeItem = async (removeIndex) => {
    const newItems = items.filter((value, index) => index !== removeIndex);
    await onChange(newItems);
    setSelectedBadgeIndex(undefined);
  };
  const addItem = async () => {
    const { hasError } = runValidationTasks();
    if (
      currentFieldValue !== undefined &&
      currentFieldValue !== null &&
      currentFieldValue !== "" &&
      !hasError
    ) {
      const newItems = [...items];
      if (selectedBadgeIndex !== undefined) {
        newItems[selectedBadgeIndex] = currentFieldValue;
        setSelectedBadgeIndex(undefined);
      } else {
        newItems.push(currentFieldValue);
      }
      await onChange(newItems);
      setIsEditing(false);
    }
  };
  const arraySection = (
    <React.Fragment>
      {!!items?.length && (
        <ScrollView height="inherit" width="inherit" maxHeight={"7rem"}>
          {items.map((value, index) => {
            return (
              <Badge
                key={index}
                style={{
                  cursor: "pointer",
                  alignItems: "center",
                  marginRight: 3,
                  marginTop: 3,
                  backgroundColor:
                    index === selectedBadgeIndex ? "#B8CEF9" : "",
                }}
                onClick={() => {
                  setSelectedBadgeIndex(index);
                  setFieldValue(items[index]);
                  setIsEditing(true);
                }}
              >
                {getBadgeText ? getBadgeText(value) : value.toString()}
                <Icon
                  style={{
                    cursor: "pointer",
                    paddingLeft: 3,
                    width: 20,
                    height: 20,
                  }}
                  viewBox={{ width: 20, height: 20 }}
                  paths={[
                    {
                      d: "M10 10l5.09-5.09L10 10l5.09 5.09L10 10zm0 0L4.91 4.91 10 10l-5.09 5.09L10 10z",
                      stroke: "black",
                    },
                  ]}
                  ariaLabel="button"
                  onClick={(event) => {
                    event.stopPropagation();
                    removeItem(index);
                  }}
                />
              </Badge>
            );
          })}
        </ScrollView>
      )}
      <Divider orientation="horizontal" marginTop={5} />
    </React.Fragment>
  );
  if (lengthLimit !== undefined && items.length >= lengthLimit && !isEditing) {
    return (
      <React.Fragment>
        {labelElement}
        {arraySection}
      </React.Fragment>
    );
  }
  return (
    <React.Fragment>
      {labelElement}
      {isEditing && children}
      {!isEditing ? (
        <>
          <Button
            onClick={() => {
              setIsEditing(true);
            }}
          >
            Add item
          </Button>
          {errorMessage && hasError && (
            <Text color={errorStyles.color} fontSize={errorStyles.fontSize}>
              {errorMessage}
            </Text>
          )}
        </>
      ) : (
        <Flex justifyContent="flex-end">
          {(currentFieldValue || isEditing) && (
            <Button
              children="Cancel"
              type="button"
              size="small"
              onClick={() => {
                setFieldValue(defaultFieldValue);
                setIsEditing(false);
                setSelectedBadgeIndex(undefined);
              }}
            ></Button>
          )}
          <Button size="small" variation="link" onClick={addItem}>
            {selectedBadgeIndex !== undefined ? "Save" : "Add"}
          </Button>
        </Flex>
      )}
      {arraySection}
    </React.Fragment>
  );
}
export default function PromoCodeCreateForm(props) {
  const {
    clearOnSuccess = true,
    onSuccess,
    onError,
    onSubmit,
    onValidate,
    onChange,
    overrides,
    ...rest
  } = props;
  const initialValues = {
    code: "",
    description: "",
    discountType: "",
    discountValue: "",
    minPurchaseAmount: "",
    maxDiscountAmount: "",
    usageLimit: "",
    usageLimitPerUser: "",
    validFrom: "",
    validUntil: "",
    isActive: false,
    applicableToCategories: [],
    applicableToProducts: [],
    isPlusMembersOnly: false,
    isFirstOrderOnly: false,
    timesUsed: "",
    createdAt: "",
    updatedAt: "",
  };
  const [code, setCode] = React.useState(initialValues.code);
  const [description, setDescription] = React.useState(
    initialValues.description
  );
  const [discountType, setDiscountType] = React.useState(
    initialValues.discountType
  );
  const [discountValue, setDiscountValue] = React.useState(
    initialValues.discountValue
  );
  const [minPurchaseAmount, setMinPurchaseAmount] = React.useState(
    initialValues.minPurchaseAmount
  );
  const [maxDiscountAmount, setMaxDiscountAmount] = React.useState(
    initialValues.maxDiscountAmount
  );
  const [usageLimit, setUsageLimit] = React.useState(initialValues.usageLimit);
  const [usageLimitPerUser, setUsageLimitPerUser] = React.useState(
    initialValues.usageLimitPerUser
  );
  const [validFrom, setValidFrom] = React.useState(initialValues.validFrom);
  const [validUntil, setValidUntil] = React.useState(initialValues.validUntil);
  const [isActive, setIsActive] = React.useState(initialValues.isActive);
  const [applicableToCategories, setApplicableToCategories] = React.useState(
    initialValues.applicableToCategories
  );
  const [applicableToProducts, setApplicableToProducts] = React.useState(
    initialValues.applicableToProducts
  );
  const [isPlusMembersOnly, setIsPlusMembersOnly] = React.useState(
    initialValues.isPlusMembersOnly
  );
  const [isFirstOrderOnly, setIsFirstOrderOnly] = React.useState(
    initialValues.isFirstOrderOnly
  );
  const [timesUsed, setTimesUsed] = React.useState(initialValues.timesUsed);
  const [createdAt, setCreatedAt] = React.useState(initialValues.createdAt);
  const [updatedAt, setUpdatedAt] = React.useState(initialValues.updatedAt);
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    setCode(initialValues.code);
    setDescription(initialValues.description);
    setDiscountType(initialValues.discountType);
    setDiscountValue(initialValues.discountValue);
    setMinPurchaseAmount(initialValues.minPurchaseAmount);
    setMaxDiscountAmount(initialValues.maxDiscountAmount);
    setUsageLimit(initialValues.usageLimit);
    setUsageLimitPerUser(initialValues.usageLimitPerUser);
    setValidFrom(initialValues.validFrom);
    setValidUntil(initialValues.validUntil);
    setIsActive(initialValues.isActive);
    setApplicableToCategories(initialValues.applicableToCategories);
    setCurrentApplicableToCategoriesValue("");
    setApplicableToProducts(initialValues.applicableToProducts);
    setCurrentApplicableToProductsValue("");
    setIsPlusMembersOnly(initialValues.isPlusMembersOnly);
    setIsFirstOrderOnly(initialValues.isFirstOrderOnly);
    setTimesUsed(initialValues.timesUsed);
    setCreatedAt(initialValues.createdAt);
    setUpdatedAt(initialValues.updatedAt);
    setErrors({});
  };
  const [
    currentApplicableToCategoriesValue,
    setCurrentApplicableToCategoriesValue,
  ] = React.useState("");
  const applicableToCategoriesRef = React.createRef();
  const [
    currentApplicableToProductsValue,
    setCurrentApplicableToProductsValue,
  ] = React.useState("");
  const applicableToProductsRef = React.createRef();
  const validations = {
    code: [{ type: "Required" }],
    description: [],
    discountType: [{ type: "Required" }],
    discountValue: [{ type: "Required" }],
    minPurchaseAmount: [],
    maxDiscountAmount: [],
    usageLimit: [],
    usageLimitPerUser: [],
    validFrom: [{ type: "Required" }],
    validUntil: [{ type: "Required" }],
    isActive: [{ type: "Required" }],
    applicableToCategories: [],
    applicableToProducts: [],
    isPlusMembersOnly: [],
    isFirstOrderOnly: [],
    timesUsed: [],
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
          code,
          description,
          discountType,
          discountValue,
          minPurchaseAmount,
          maxDiscountAmount,
          usageLimit,
          usageLimitPerUser,
          validFrom,
          validUntil,
          isActive,
          applicableToCategories,
          applicableToProducts,
          isPlusMembersOnly,
          isFirstOrderOnly,
          timesUsed,
          createdAt,
          updatedAt,
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
            query: createPromoCode.replaceAll("__typename", ""),
            variables: {
              input: {
                ...modelFields,
              },
            },
          });
          if (onSuccess) {
            onSuccess(modelFields);
          }
          if (clearOnSuccess) {
            resetStateValues();
          }
        } catch (err) {
          if (onError) {
            const messages = err.errors.map((e) => e.message).join("\n");
            onError(modelFields, messages);
          }
        }
      }}
      {...getOverrideProps(overrides, "PromoCodeCreateForm")}
      {...rest}
    >
      <TextField
        label="Code"
        isRequired={true}
        isReadOnly={false}
        value={code}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              code: value,
              description,
              discountType,
              discountValue,
              minPurchaseAmount,
              maxDiscountAmount,
              usageLimit,
              usageLimitPerUser,
              validFrom,
              validUntil,
              isActive,
              applicableToCategories,
              applicableToProducts,
              isPlusMembersOnly,
              isFirstOrderOnly,
              timesUsed,
              createdAt,
              updatedAt,
            };
            const result = onChange(modelFields);
            value = result?.code ?? value;
          }
          if (errors.code?.hasError) {
            runValidationTasks("code", value);
          }
          setCode(value);
        }}
        onBlur={() => runValidationTasks("code", code)}
        errorMessage={errors.code?.errorMessage}
        hasError={errors.code?.hasError}
        {...getOverrideProps(overrides, "code")}
      ></TextField>
      <TextField
        label="Description"
        isRequired={false}
        isReadOnly={false}
        value={description}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              code,
              description: value,
              discountType,
              discountValue,
              minPurchaseAmount,
              maxDiscountAmount,
              usageLimit,
              usageLimitPerUser,
              validFrom,
              validUntil,
              isActive,
              applicableToCategories,
              applicableToProducts,
              isPlusMembersOnly,
              isFirstOrderOnly,
              timesUsed,
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
      <SelectField
        label="Discount type"
        placeholder="Please select an option"
        isDisabled={false}
        value={discountType}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              code,
              description,
              discountType: value,
              discountValue,
              minPurchaseAmount,
              maxDiscountAmount,
              usageLimit,
              usageLimitPerUser,
              validFrom,
              validUntil,
              isActive,
              applicableToCategories,
              applicableToProducts,
              isPlusMembersOnly,
              isFirstOrderOnly,
              timesUsed,
              createdAt,
              updatedAt,
            };
            const result = onChange(modelFields);
            value = result?.discountType ?? value;
          }
          if (errors.discountType?.hasError) {
            runValidationTasks("discountType", value);
          }
          setDiscountType(value);
        }}
        onBlur={() => runValidationTasks("discountType", discountType)}
        errorMessage={errors.discountType?.errorMessage}
        hasError={errors.discountType?.hasError}
        {...getOverrideProps(overrides, "discountType")}
      >
        <option
          children="Percentage"
          value="PERCENTAGE"
          {...getOverrideProps(overrides, "discountTypeoption0")}
        ></option>
        <option
          children="Fixed amount"
          value="FIXED_AMOUNT"
          {...getOverrideProps(overrides, "discountTypeoption1")}
        ></option>
        <option
          children="Free shipping"
          value="FREE_SHIPPING"
          {...getOverrideProps(overrides, "discountTypeoption2")}
        ></option>
      </SelectField>
      <TextField
        label="Discount value"
        isRequired={true}
        isReadOnly={false}
        type="number"
        step="any"
        value={discountValue}
        onChange={(e) => {
          let value = isNaN(parseFloat(e.target.value))
            ? e.target.value
            : parseFloat(e.target.value);
          if (onChange) {
            const modelFields = {
              code,
              description,
              discountType,
              discountValue: value,
              minPurchaseAmount,
              maxDiscountAmount,
              usageLimit,
              usageLimitPerUser,
              validFrom,
              validUntil,
              isActive,
              applicableToCategories,
              applicableToProducts,
              isPlusMembersOnly,
              isFirstOrderOnly,
              timesUsed,
              createdAt,
              updatedAt,
            };
            const result = onChange(modelFields);
            value = result?.discountValue ?? value;
          }
          if (errors.discountValue?.hasError) {
            runValidationTasks("discountValue", value);
          }
          setDiscountValue(value);
        }}
        onBlur={() => runValidationTasks("discountValue", discountValue)}
        errorMessage={errors.discountValue?.errorMessage}
        hasError={errors.discountValue?.hasError}
        {...getOverrideProps(overrides, "discountValue")}
      ></TextField>
      <TextField
        label="Min purchase amount"
        isRequired={false}
        isReadOnly={false}
        type="number"
        step="any"
        value={minPurchaseAmount}
        onChange={(e) => {
          let value = isNaN(parseFloat(e.target.value))
            ? e.target.value
            : parseFloat(e.target.value);
          if (onChange) {
            const modelFields = {
              code,
              description,
              discountType,
              discountValue,
              minPurchaseAmount: value,
              maxDiscountAmount,
              usageLimit,
              usageLimitPerUser,
              validFrom,
              validUntil,
              isActive,
              applicableToCategories,
              applicableToProducts,
              isPlusMembersOnly,
              isFirstOrderOnly,
              timesUsed,
              createdAt,
              updatedAt,
            };
            const result = onChange(modelFields);
            value = result?.minPurchaseAmount ?? value;
          }
          if (errors.minPurchaseAmount?.hasError) {
            runValidationTasks("minPurchaseAmount", value);
          }
          setMinPurchaseAmount(value);
        }}
        onBlur={() =>
          runValidationTasks("minPurchaseAmount", minPurchaseAmount)
        }
        errorMessage={errors.minPurchaseAmount?.errorMessage}
        hasError={errors.minPurchaseAmount?.hasError}
        {...getOverrideProps(overrides, "minPurchaseAmount")}
      ></TextField>
      <TextField
        label="Max discount amount"
        isRequired={false}
        isReadOnly={false}
        type="number"
        step="any"
        value={maxDiscountAmount}
        onChange={(e) => {
          let value = isNaN(parseFloat(e.target.value))
            ? e.target.value
            : parseFloat(e.target.value);
          if (onChange) {
            const modelFields = {
              code,
              description,
              discountType,
              discountValue,
              minPurchaseAmount,
              maxDiscountAmount: value,
              usageLimit,
              usageLimitPerUser,
              validFrom,
              validUntil,
              isActive,
              applicableToCategories,
              applicableToProducts,
              isPlusMembersOnly,
              isFirstOrderOnly,
              timesUsed,
              createdAt,
              updatedAt,
            };
            const result = onChange(modelFields);
            value = result?.maxDiscountAmount ?? value;
          }
          if (errors.maxDiscountAmount?.hasError) {
            runValidationTasks("maxDiscountAmount", value);
          }
          setMaxDiscountAmount(value);
        }}
        onBlur={() =>
          runValidationTasks("maxDiscountAmount", maxDiscountAmount)
        }
        errorMessage={errors.maxDiscountAmount?.errorMessage}
        hasError={errors.maxDiscountAmount?.hasError}
        {...getOverrideProps(overrides, "maxDiscountAmount")}
      ></TextField>
      <TextField
        label="Usage limit"
        isRequired={false}
        isReadOnly={false}
        type="number"
        step="any"
        value={usageLimit}
        onChange={(e) => {
          let value = isNaN(parseInt(e.target.value))
            ? e.target.value
            : parseInt(e.target.value);
          if (onChange) {
            const modelFields = {
              code,
              description,
              discountType,
              discountValue,
              minPurchaseAmount,
              maxDiscountAmount,
              usageLimit: value,
              usageLimitPerUser,
              validFrom,
              validUntil,
              isActive,
              applicableToCategories,
              applicableToProducts,
              isPlusMembersOnly,
              isFirstOrderOnly,
              timesUsed,
              createdAt,
              updatedAt,
            };
            const result = onChange(modelFields);
            value = result?.usageLimit ?? value;
          }
          if (errors.usageLimit?.hasError) {
            runValidationTasks("usageLimit", value);
          }
          setUsageLimit(value);
        }}
        onBlur={() => runValidationTasks("usageLimit", usageLimit)}
        errorMessage={errors.usageLimit?.errorMessage}
        hasError={errors.usageLimit?.hasError}
        {...getOverrideProps(overrides, "usageLimit")}
      ></TextField>
      <TextField
        label="Usage limit per user"
        isRequired={false}
        isReadOnly={false}
        type="number"
        step="any"
        value={usageLimitPerUser}
        onChange={(e) => {
          let value = isNaN(parseInt(e.target.value))
            ? e.target.value
            : parseInt(e.target.value);
          if (onChange) {
            const modelFields = {
              code,
              description,
              discountType,
              discountValue,
              minPurchaseAmount,
              maxDiscountAmount,
              usageLimit,
              usageLimitPerUser: value,
              validFrom,
              validUntil,
              isActive,
              applicableToCategories,
              applicableToProducts,
              isPlusMembersOnly,
              isFirstOrderOnly,
              timesUsed,
              createdAt,
              updatedAt,
            };
            const result = onChange(modelFields);
            value = result?.usageLimitPerUser ?? value;
          }
          if (errors.usageLimitPerUser?.hasError) {
            runValidationTasks("usageLimitPerUser", value);
          }
          setUsageLimitPerUser(value);
        }}
        onBlur={() =>
          runValidationTasks("usageLimitPerUser", usageLimitPerUser)
        }
        errorMessage={errors.usageLimitPerUser?.errorMessage}
        hasError={errors.usageLimitPerUser?.hasError}
        {...getOverrideProps(overrides, "usageLimitPerUser")}
      ></TextField>
      <TextField
        label="Valid from"
        isRequired={true}
        isReadOnly={false}
        type="datetime-local"
        value={validFrom && convertToLocal(new Date(validFrom))}
        onChange={(e) => {
          let value =
            e.target.value === "" ? "" : new Date(e.target.value).toISOString();
          if (onChange) {
            const modelFields = {
              code,
              description,
              discountType,
              discountValue,
              minPurchaseAmount,
              maxDiscountAmount,
              usageLimit,
              usageLimitPerUser,
              validFrom: value,
              validUntil,
              isActive,
              applicableToCategories,
              applicableToProducts,
              isPlusMembersOnly,
              isFirstOrderOnly,
              timesUsed,
              createdAt,
              updatedAt,
            };
            const result = onChange(modelFields);
            value = result?.validFrom ?? value;
          }
          if (errors.validFrom?.hasError) {
            runValidationTasks("validFrom", value);
          }
          setValidFrom(value);
        }}
        onBlur={() => runValidationTasks("validFrom", validFrom)}
        errorMessage={errors.validFrom?.errorMessage}
        hasError={errors.validFrom?.hasError}
        {...getOverrideProps(overrides, "validFrom")}
      ></TextField>
      <TextField
        label="Valid until"
        isRequired={true}
        isReadOnly={false}
        type="datetime-local"
        value={validUntil && convertToLocal(new Date(validUntil))}
        onChange={(e) => {
          let value =
            e.target.value === "" ? "" : new Date(e.target.value).toISOString();
          if (onChange) {
            const modelFields = {
              code,
              description,
              discountType,
              discountValue,
              minPurchaseAmount,
              maxDiscountAmount,
              usageLimit,
              usageLimitPerUser,
              validFrom,
              validUntil: value,
              isActive,
              applicableToCategories,
              applicableToProducts,
              isPlusMembersOnly,
              isFirstOrderOnly,
              timesUsed,
              createdAt,
              updatedAt,
            };
            const result = onChange(modelFields);
            value = result?.validUntil ?? value;
          }
          if (errors.validUntil?.hasError) {
            runValidationTasks("validUntil", value);
          }
          setValidUntil(value);
        }}
        onBlur={() => runValidationTasks("validUntil", validUntil)}
        errorMessage={errors.validUntil?.errorMessage}
        hasError={errors.validUntil?.hasError}
        {...getOverrideProps(overrides, "validUntil")}
      ></TextField>
      <SwitchField
        label="Is active"
        defaultChecked={false}
        isDisabled={false}
        isChecked={isActive}
        onChange={(e) => {
          let value = e.target.checked;
          if (onChange) {
            const modelFields = {
              code,
              description,
              discountType,
              discountValue,
              minPurchaseAmount,
              maxDiscountAmount,
              usageLimit,
              usageLimitPerUser,
              validFrom,
              validUntil,
              isActive: value,
              applicableToCategories,
              applicableToProducts,
              isPlusMembersOnly,
              isFirstOrderOnly,
              timesUsed,
              createdAt,
              updatedAt,
            };
            const result = onChange(modelFields);
            value = result?.isActive ?? value;
          }
          if (errors.isActive?.hasError) {
            runValidationTasks("isActive", value);
          }
          setIsActive(value);
        }}
        onBlur={() => runValidationTasks("isActive", isActive)}
        errorMessage={errors.isActive?.errorMessage}
        hasError={errors.isActive?.hasError}
        {...getOverrideProps(overrides, "isActive")}
      ></SwitchField>
      <ArrayField
        onChange={async (items) => {
          let values = items;
          if (onChange) {
            const modelFields = {
              code,
              description,
              discountType,
              discountValue,
              minPurchaseAmount,
              maxDiscountAmount,
              usageLimit,
              usageLimitPerUser,
              validFrom,
              validUntil,
              isActive,
              applicableToCategories: values,
              applicableToProducts,
              isPlusMembersOnly,
              isFirstOrderOnly,
              timesUsed,
              createdAt,
              updatedAt,
            };
            const result = onChange(modelFields);
            values = result?.applicableToCategories ?? values;
          }
          setApplicableToCategories(values);
          setCurrentApplicableToCategoriesValue("");
        }}
        currentFieldValue={currentApplicableToCategoriesValue}
        label={"Applicable to categories"}
        items={applicableToCategories}
        hasError={errors?.applicableToCategories?.hasError}
        runValidationTasks={async () =>
          await runValidationTasks(
            "applicableToCategories",
            currentApplicableToCategoriesValue
          )
        }
        errorMessage={errors?.applicableToCategories?.errorMessage}
        setFieldValue={setCurrentApplicableToCategoriesValue}
        inputFieldRef={applicableToCategoriesRef}
        defaultFieldValue={""}
      >
        <TextField
          label="Applicable to categories"
          isRequired={false}
          isReadOnly={false}
          value={currentApplicableToCategoriesValue}
          onChange={(e) => {
            let { value } = e.target;
            if (errors.applicableToCategories?.hasError) {
              runValidationTasks("applicableToCategories", value);
            }
            setCurrentApplicableToCategoriesValue(value);
          }}
          onBlur={() =>
            runValidationTasks(
              "applicableToCategories",
              currentApplicableToCategoriesValue
            )
          }
          errorMessage={errors.applicableToCategories?.errorMessage}
          hasError={errors.applicableToCategories?.hasError}
          ref={applicableToCategoriesRef}
          labelHidden={true}
          {...getOverrideProps(overrides, "applicableToCategories")}
        ></TextField>
      </ArrayField>
      <ArrayField
        onChange={async (items) => {
          let values = items;
          if (onChange) {
            const modelFields = {
              code,
              description,
              discountType,
              discountValue,
              minPurchaseAmount,
              maxDiscountAmount,
              usageLimit,
              usageLimitPerUser,
              validFrom,
              validUntil,
              isActive,
              applicableToCategories,
              applicableToProducts: values,
              isPlusMembersOnly,
              isFirstOrderOnly,
              timesUsed,
              createdAt,
              updatedAt,
            };
            const result = onChange(modelFields);
            values = result?.applicableToProducts ?? values;
          }
          setApplicableToProducts(values);
          setCurrentApplicableToProductsValue("");
        }}
        currentFieldValue={currentApplicableToProductsValue}
        label={"Applicable to products"}
        items={applicableToProducts}
        hasError={errors?.applicableToProducts?.hasError}
        runValidationTasks={async () =>
          await runValidationTasks(
            "applicableToProducts",
            currentApplicableToProductsValue
          )
        }
        errorMessage={errors?.applicableToProducts?.errorMessage}
        setFieldValue={setCurrentApplicableToProductsValue}
        inputFieldRef={applicableToProductsRef}
        defaultFieldValue={""}
      >
        <TextField
          label="Applicable to products"
          isRequired={false}
          isReadOnly={false}
          value={currentApplicableToProductsValue}
          onChange={(e) => {
            let { value } = e.target;
            if (errors.applicableToProducts?.hasError) {
              runValidationTasks("applicableToProducts", value);
            }
            setCurrentApplicableToProductsValue(value);
          }}
          onBlur={() =>
            runValidationTasks(
              "applicableToProducts",
              currentApplicableToProductsValue
            )
          }
          errorMessage={errors.applicableToProducts?.errorMessage}
          hasError={errors.applicableToProducts?.hasError}
          ref={applicableToProductsRef}
          labelHidden={true}
          {...getOverrideProps(overrides, "applicableToProducts")}
        ></TextField>
      </ArrayField>
      <SwitchField
        label="Is plus members only"
        defaultChecked={false}
        isDisabled={false}
        isChecked={isPlusMembersOnly}
        onChange={(e) => {
          let value = e.target.checked;
          if (onChange) {
            const modelFields = {
              code,
              description,
              discountType,
              discountValue,
              minPurchaseAmount,
              maxDiscountAmount,
              usageLimit,
              usageLimitPerUser,
              validFrom,
              validUntil,
              isActive,
              applicableToCategories,
              applicableToProducts,
              isPlusMembersOnly: value,
              isFirstOrderOnly,
              timesUsed,
              createdAt,
              updatedAt,
            };
            const result = onChange(modelFields);
            value = result?.isPlusMembersOnly ?? value;
          }
          if (errors.isPlusMembersOnly?.hasError) {
            runValidationTasks("isPlusMembersOnly", value);
          }
          setIsPlusMembersOnly(value);
        }}
        onBlur={() =>
          runValidationTasks("isPlusMembersOnly", isPlusMembersOnly)
        }
        errorMessage={errors.isPlusMembersOnly?.errorMessage}
        hasError={errors.isPlusMembersOnly?.hasError}
        {...getOverrideProps(overrides, "isPlusMembersOnly")}
      ></SwitchField>
      <SwitchField
        label="Is first order only"
        defaultChecked={false}
        isDisabled={false}
        isChecked={isFirstOrderOnly}
        onChange={(e) => {
          let value = e.target.checked;
          if (onChange) {
            const modelFields = {
              code,
              description,
              discountType,
              discountValue,
              minPurchaseAmount,
              maxDiscountAmount,
              usageLimit,
              usageLimitPerUser,
              validFrom,
              validUntil,
              isActive,
              applicableToCategories,
              applicableToProducts,
              isPlusMembersOnly,
              isFirstOrderOnly: value,
              timesUsed,
              createdAt,
              updatedAt,
            };
            const result = onChange(modelFields);
            value = result?.isFirstOrderOnly ?? value;
          }
          if (errors.isFirstOrderOnly?.hasError) {
            runValidationTasks("isFirstOrderOnly", value);
          }
          setIsFirstOrderOnly(value);
        }}
        onBlur={() => runValidationTasks("isFirstOrderOnly", isFirstOrderOnly)}
        errorMessage={errors.isFirstOrderOnly?.errorMessage}
        hasError={errors.isFirstOrderOnly?.hasError}
        {...getOverrideProps(overrides, "isFirstOrderOnly")}
      ></SwitchField>
      <TextField
        label="Times used"
        isRequired={false}
        isReadOnly={false}
        type="number"
        step="any"
        value={timesUsed}
        onChange={(e) => {
          let value = isNaN(parseInt(e.target.value))
            ? e.target.value
            : parseInt(e.target.value);
          if (onChange) {
            const modelFields = {
              code,
              description,
              discountType,
              discountValue,
              minPurchaseAmount,
              maxDiscountAmount,
              usageLimit,
              usageLimitPerUser,
              validFrom,
              validUntil,
              isActive,
              applicableToCategories,
              applicableToProducts,
              isPlusMembersOnly,
              isFirstOrderOnly,
              timesUsed: value,
              createdAt,
              updatedAt,
            };
            const result = onChange(modelFields);
            value = result?.timesUsed ?? value;
          }
          if (errors.timesUsed?.hasError) {
            runValidationTasks("timesUsed", value);
          }
          setTimesUsed(value);
        }}
        onBlur={() => runValidationTasks("timesUsed", timesUsed)}
        errorMessage={errors.timesUsed?.errorMessage}
        hasError={errors.timesUsed?.hasError}
        {...getOverrideProps(overrides, "timesUsed")}
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
              code,
              description,
              discountType,
              discountValue,
              minPurchaseAmount,
              maxDiscountAmount,
              usageLimit,
              usageLimitPerUser,
              validFrom,
              validUntil,
              isActive,
              applicableToCategories,
              applicableToProducts,
              isPlusMembersOnly,
              isFirstOrderOnly,
              timesUsed,
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
              code,
              description,
              discountType,
              discountValue,
              minPurchaseAmount,
              maxDiscountAmount,
              usageLimit,
              usageLimitPerUser,
              validFrom,
              validUntil,
              isActive,
              applicableToCategories,
              applicableToProducts,
              isPlusMembersOnly,
              isFirstOrderOnly,
              timesUsed,
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
          children="Clear"
          type="reset"
          onClick={(event) => {
            event.preventDefault();
            resetStateValues();
          }}
          {...getOverrideProps(overrides, "ClearButton")}
        ></Button>
        <Flex
          gap="15px"
          {...getOverrideProps(overrides, "RightAlignCTASubFlex")}
        >
          <Button
            children="Submit"
            type="submit"
            variation="primary"
            isDisabled={Object.values(errors).some((e) => e?.hasError)}
            {...getOverrideProps(overrides, "SubmitButton")}
          ></Button>
        </Flex>
      </Flex>
    </Grid>
  );
}
