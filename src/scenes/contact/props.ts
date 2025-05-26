/* eslint-disable @typescript-eslint/no-empty-object-type */

export interface ContactSceneProps {}

export interface ContactViewModelInitProps {}

export interface ContactViewModelProps {
  sendEmail: (formData: {
    fullName: string;
    email: string;
    phone?: string;
    subject: string;
    message: string;
  }) => Promise<{ success: boolean; error?: unknown }>;
}

export interface ContactViewProps {
  viewModel: ContactViewModelProps;
}
