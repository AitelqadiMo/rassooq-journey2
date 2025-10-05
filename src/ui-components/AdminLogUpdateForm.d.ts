/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, SelectFieldProps, TextFieldProps } from "@aws-amplify/ui-react";
export declare type EscapeHatchProps = {
    [elementHierarchy: string]: Record<string, unknown>;
} | null;
export declare type VariantValues = {
    [key: string]: string;
};
export declare type Variant = {
    variantValues: VariantValues;
    overrides: EscapeHatchProps;
};
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type AdminLogUpdateFormInputValues = {
    adminId?: string;
    adminEmail?: string;
    actionType?: string;
    description?: string;
    targetType?: string;
    targetId?: string;
    metadata?: string;
    ipAddress?: string;
    userAgent?: string;
    createdAt?: string;
    updatedAt?: string;
};
export declare type AdminLogUpdateFormValidationValues = {
    adminId?: ValidationFunction<string>;
    adminEmail?: ValidationFunction<string>;
    actionType?: ValidationFunction<string>;
    description?: ValidationFunction<string>;
    targetType?: ValidationFunction<string>;
    targetId?: ValidationFunction<string>;
    metadata?: ValidationFunction<string>;
    ipAddress?: ValidationFunction<string>;
    userAgent?: ValidationFunction<string>;
    createdAt?: ValidationFunction<string>;
    updatedAt?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type AdminLogUpdateFormOverridesProps = {
    AdminLogUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    adminId?: PrimitiveOverrideProps<TextFieldProps>;
    adminEmail?: PrimitiveOverrideProps<TextFieldProps>;
    actionType?: PrimitiveOverrideProps<SelectFieldProps>;
    description?: PrimitiveOverrideProps<TextFieldProps>;
    targetType?: PrimitiveOverrideProps<TextFieldProps>;
    targetId?: PrimitiveOverrideProps<TextFieldProps>;
    metadata?: PrimitiveOverrideProps<TextFieldProps>;
    ipAddress?: PrimitiveOverrideProps<TextFieldProps>;
    userAgent?: PrimitiveOverrideProps<TextFieldProps>;
    createdAt?: PrimitiveOverrideProps<TextFieldProps>;
    updatedAt?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type AdminLogUpdateFormProps = React.PropsWithChildren<{
    overrides?: AdminLogUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    adminLog?: any;
    onSubmit?: (fields: AdminLogUpdateFormInputValues) => AdminLogUpdateFormInputValues;
    onSuccess?: (fields: AdminLogUpdateFormInputValues) => void;
    onError?: (fields: AdminLogUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: AdminLogUpdateFormInputValues) => AdminLogUpdateFormInputValues;
    onValidate?: AdminLogUpdateFormValidationValues;
} & React.CSSProperties>;
export default function AdminLogUpdateForm(props: AdminLogUpdateFormProps): React.ReactElement;
