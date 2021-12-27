import constants from '../../../Widgits/Form/Utils/constants';
const { inputbox } = constants

export const FormConfig = {
    columns: 2,
    elements: [
        {
            uniqueId: "dobId",
            element: inputbox,
            type: "text",
            defaultValue: '12-03-2001',
            classes: "",
            heading: "Date Of Birth",
            min: { length: 8, msg: "Min length should be 8" },
            max: { length: 11, msg: "Max length should be 11" },
            regex: { reg: /^(\d{1,2})[-./](\d{1,2})[-./](\d{4})$/, msg: "Date should be DD-MM-YYYY" },
            mandatory: { require: true, msg: "Require Field" },
            placeholder: "Date Of Birth",
            depend_on: [],
        },
        {
            uniqueId: "nameId",
            element: inputbox,
            type: "text",
            defaultValue: "101",
            classes: "",
            heading: "User Name",
            placeholder: "User Name",
            mandatory: { require: true, msg: "This Field is Required" },
            depend_on: [],

        },
        {
            uniqueId: "ageId",
            element: inputbox,
            type: "text",
            defaultValue: "161616",
            classes: "",
            heading: "Age",
            placeholder: "",
            depend_on: ["dobId"]
        }
    ]


}