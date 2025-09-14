/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
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
export declare type SellerCreateFormInputValues = {
    name?: string;
    slug?: string;
    logoUrl?: string;
    rating?: number;
    createdAt?: string;
    updatedAt?: string;
};
export declare type SellerCreateFormValidationValues = {
    name?: ValidationFunction<string>;
    slug?: ValidationFunction<string>;
    logoUrl?: ValidationFunction<string>;
    rating?: ValidationFunction<number>;
    createdAt?: ValidationFunction<string>;
    updatedAt?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type SellerCreateFormOverridesProps = {
    SellerCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    name?: PrimitiveOverrideProps<TextFieldProps>;
    slug?: PrimitiveOverrideProps<TextFieldProps>;
    logoUrl?: PrimitiveOverrideProps<TextFieldProps>;
    rating?: PrimitiveOverrideProps<TextFieldProps>;
    createdAt?: PrimitiveOverrideProps<TextFieldProps>;
    updatedAt?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type SellerCreateFormProps = React.PropsWithChildren<{
    overrides?: SellerCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: SellerCreateFormInputValues) => SellerCreateFormInputValues;
    onSuccess?: (fields: SellerCreateFormInputValues) => void;
    onError?: (fields: SellerCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: SellerCreateFormInputValues) => SellerCreateFormInputValues;
    onValidate?: SellerCreateFormValidationValues;
} & React.CSSProperties>;
export default function SellerCreateForm(props: SellerCreateFormProps): React.ReactElement;
