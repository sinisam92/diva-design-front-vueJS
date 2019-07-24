import moment from 'moment';

export const DateMixin = {
  filters: {
    formatDate(str, outputFormat = 'll') {
      return moment(str).format(outputFormat);
    },
    diffForHumans(str) {
      return moment(str).fromNow();
    }
  }
};
