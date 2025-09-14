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
export declare type SellerUpdateFormInputValues = {
    name?: string;
    slug?: string;
    logoUrl?: string;
    rating?: number;
    createdAt?: string;
    updatedAt?: string;
};
export declare type SellerUpdateFormValidationValues = {
    name?: ValidationFunction<string>;
    slug?: ValidationFunction<string>;
    logoUrl?: ValidationFunction<string>;
    rating?: ValidationFunction<number>;
    createdAt?: ValidationFunction<string>;
    updatedAt?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type SellerUpdateFormOverridesProps = {
    SellerUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    name?: PrimitiveOverrideProps<TextFieldProps>;
    slug?: PrimitiveOverrideProps<TextFieldProps>;
    logoUrl?: PrimitiveOverrideProps<TextFieldProps>;
    rating?: PrimitiveOverrideProps<TextFieldProps>;
    createdAt?: PrimitiveOverrideProps<TextFieldProps>;
    updatedAt?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type SellerUpdateFormProps = React.PropsWithChildren<{
    overrides?: SellerUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    seller?: any;
    onSubmit?: (fields: SellerUpdateFormInputValues) => SellerUpdateFormInputValues;
    onSuccess?: (fields: SellerUpdateFormInputValues) => void;
    onError?: (fields: SellerUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: SellerUpdateFormInputValues) => SellerUpdateFormInputValues;
    onValidate?: SellerUpdateFormValidationValues;
} & React.CSSProperties>;
export default function SellerUpdateForm(props: SellerUpdateFormProps): React.ReactElement;
