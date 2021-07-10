
export const validateInput = (rules: any, value: any, result: any) => {

    const errorStatus: any = {
        min: Boolean(rules?.min?.length) && value?.length >= (rules?.min?.length),
        max: Boolean(rules?.max?.length) && value?.length <= (rules?.max?.length),
        mandatory: Boolean(rules?.mandatory?.require) && (value.length) !== 0,
        regex: Boolean(rules?.regex?.reg) && (new RegExp(rules?.regex?.reg).test(value))
    }
    const data: any = Object.entries(errorStatus).find(([key, value]) => value === false);
    return (data && rules) ? result(rules[data[0]].msg, errorStatus) : result("", errorStatus);

}