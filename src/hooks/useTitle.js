import { useEffect } from "react"

const useTitle = title => {
    useEffect(()=> {
        document.title = `${title} - Super Hero`;
    },[title])
}
export default useTitle;