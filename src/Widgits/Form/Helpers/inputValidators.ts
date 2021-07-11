
export const validateInput = (props: any, value: any, result: any) => {
    if(!props) return result();
    const allRules: any = {
        min: Boolean(props?.min?.length) && value?.length >= (props?.min?.length),
        max: Boolean(props?.max?.length) && value?.length <= (props?.max?.length),
        mandatory: Boolean(props?.mandatory?.require) && (value.length) !== 0,
        regex: Boolean(props?.regex?.reg) && (new RegExp(props?.regex?.reg).test(value))
    }

    const unfollowedRule: any = Object.entries(allRules).find(([key, value]) =>
        props?.hasOwnProperty([key]) && value === false);
    
    return unfollowedRule ? result(props[unfollowedRule[0]]?.msg,false) : result();

}