import { NotifierTitle } from './enums';

const notFound = {
  title: 'ERROR 404!',
  subTitle: 'OPPS! PAGE NOT FOUND',
  detail: 'Sorry, the page you are looking for does not exist. If you think something is broken report a problem.',
  redirection: {
    url: '/',
    displayName: 'RETURN HOME',
  },
  problemUrl: {
    url: '/',
    displayName: 'REPORT PROBLEM',
  },
};

const error_messages = {
  generic: {
    message: 'Something went wrong',
    description: 'Internal Server Error',
  },
  default: {
    message: 'Failed - ~~~',
    description: 'Could not ~~~ at the moment',
  },
};

const success_messages = {
  [NotifierTitle.GENERIC]: {
    message: 'Generic message',
    description: 'Generic description',
  },
};
export { error_messages, notFound, success_messages };
