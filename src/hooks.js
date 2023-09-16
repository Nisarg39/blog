import { useState } from "react";

export function useFormInput(initialValue){
    const [value, setValue] = useState(initialValue);   // this will be a common hook where every field will use value and setValue for all the hooks in CreatePost
    function handleChange (e){
        setValue(e.target.value);
    }

    return{
        value,
        onChange: handleChange
    }
}