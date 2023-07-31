import type { useForm } from "svelte-use-form";


export type GenericSettingsParams = Parameters<typeof useForm>['0'];

export interface GenericSettingsInput {
  name: string;
  placeholder?: string
}