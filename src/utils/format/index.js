export const OnlyNumbers = (str) => str.replace(/[^0-9]/g, "");

export const DateBrFormat = (date) => {
  if (!date) return "";
  return date.replace(/(\d*)-(\d*)-(\d*).*/, "$3/$2/$1");
};

export const CpfCnpjFormat = (param) => {
  if (param && param.length == 14) {
    param = param.replace(/\D/g, "");
    param = param.replace(/^(\d{2})(\d)/, "$1.$2");
    param = param.replace(/^(\d{2})\.(\d{3})(\d)/, "$1.$2.$3");
    param = param.replace(/\.(\d{3})(\d)/, ".$1/$2");
    param = param.replace(/(\d{4})(\d)/, "$1-$2");
  }
  if (param && param.length == 11)
    param = param.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/g, "$1.$2.$3-$4");
  return param;
};

export function PhoneFormat(event) {
  if (event.target) {
    let { value } = event.target;

    value = value.replace(/\D/g, "");
    value = value.replace(/(\d{2})/, "($1) ");
    const isMobilePhone = /^[(][0-9][0-9][)][\s][9]/.test(value);

    if (!/[0-9]/.test(event.key)) {
      event.preventDefault();
    }

    if (isMobilePhone) {
      event.currentTarget.maxLength = 15;
      value = value.replace(/\D/g, "");
      value = value.replace(/(\d{2})(\d{1})/, "($1) $2");
      value = value.replace(/(\d{5})/, "$1-");
      value = value.replace(/(\d{4})/, "$1");
    } else {
      event.currentTarget.maxLength = 14;
      value = value.replace(/(\d{4})/, "$1-");
      value = value.replace(/(\d{4})/, "$1");
    }

    event.currentTarget.value = value;
  }

  /* ANCHOR: Format text in table */
  if (!event.target) {
    if (!event) return "";

    event = event.replace(/\D/g, "");
    if (event.length > 9) {
      event = event.replace(/^(\d{2})(\d)/g, "($1) $2");
    } else {
      event = event.replace(/^(\d{2})(\d)/g, "(00) $1$2");
    }
    event = event.replace(/(\d)(\d{4})$/, "$1-$2");
    return event || "";
  }
}

export const Format = {
  OnlyNumbers,
  DateBrFormat,
  CpfCnpjFormat,
  PhoneFormat,
};

export default Format;
