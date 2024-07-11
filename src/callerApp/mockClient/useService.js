import {serviceProcess} from "../mockService/mockServiceController";

const useService = (setShowLoading, setData) => {
    const callService = async () => {
        setShowLoading(true);
        console.log('i start the call');
        const data = await serviceProcess(setShowLoading);
        console.log('i finish the call');
        setShowLoading(false);
        setData(data);
    }
    return [callService];
};
export default useService;
