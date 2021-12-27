import React, { ReactElement } from 'react'
import InputBox from '../../Elements/InputBox'

interface Props {
    details?: any,
    id?: number
}

const defaultProps = {
    details: {
        tag: 'INPUTBOX'
    },
    id: 12345
}

function Elements({ details }: Props): ReactElement {
    const { tag, ...rest } = details;

    switch (tag) {
        case 'INPUTBOX':
            return <InputBox {...rest} />
        default:
            return <InputBox {...rest} />
    }

}

Elements.defaultProps = defaultProps
export default Elements
