import { error_messages } from './en';
import { NotifierTitle, Orientation } from './enums';
import { ErrorObject } from './types';

export const getOrientation = (width: number, height: number): Orientation =>
  width > height ? Orientation.LANDSCAPE : width < height ? Orientation.PORTRAIT : Orientation.SQUARE;

export const generateErrorMessage = (title: NotifierTitle, description?: string): ErrorObject => ({
  message: error_messages.default.message.replace('~~~', title),
  description: description || error_messages.default.description.replace('~~~', title),
});
