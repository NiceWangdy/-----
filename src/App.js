import React, {useState} from 'react';
import InputNumber from './InputNumber'
import Button from './Button'

const App = () => {
    const [value, setValue] = useState('aaa')
    return (
        <div>
            <h2>InputNumber组件</h2>
            <InputNumber value={value} onChange={e => {
                setValue(e.target.value)
            }}/>
            <InputNumber defaultValue={value} onChange={e => {
            }}/>

            <h2>Confirm组件</h2>
            <Button>Confirm</Button>
        </div>
    )
}

export default App;
