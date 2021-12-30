import React, { ReactElement } from 'react'
import InputBox from '../../Elements/InputBox'

interface Props {
    details?: any,
    index: number
}

const defaultProps = {
    details: {
        tag: 'INPUTBOX'
    },
    index: 1234
}

function Elements({ details,index }: Props): ReactElement {
    const { tag, ...rest } = details;

    switch (tag) {
        case 'INPUTBOX':
            return <InputBox {...rest} dataIndex={index} />
        default:
            return <InputBox {...rest} dataIndex={index}/>
    }

}

Elements.defaultProps = defaultProps
export default Elements
