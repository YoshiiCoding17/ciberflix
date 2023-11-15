import { useState } from "react"


export const useForm = (obj) => {

    const [form, setForm] = useState(obj);

    const onChangeForm = ({target:{name,value}}) =>{
        setForm({
            ...form,
            [name]:value
        })
    }

  return {
    ...form,
    form,
    onChangeForm,
  }
}
