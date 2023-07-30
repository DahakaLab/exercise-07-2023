import IMask from 'imask';

export const getPhoneFormatted = (phone: string) => {
  const masked = IMask.createMask({
    mask: '+0 (000) 000-00-00'
  });
  masked.resolve(phone);
  return masked.value
}