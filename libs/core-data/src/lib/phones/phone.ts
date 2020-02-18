export interface Phone {
  id: number;
  title: string;
  details: string;
}

export const emptyPhone: Phone = {
  id: null,
  title: '',
  details: ''
};
