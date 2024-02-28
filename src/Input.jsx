export default function Input({ label, onChange}){
    return(
        <>
            <label htmlFor="">{label}</label>
            <input onChange={onChange}></input>
        </>
    )
}

