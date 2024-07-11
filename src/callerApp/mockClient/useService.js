import {serviceProcess} from "../mockService/mockServiceController";

const useService = (setShowLoading, setData) => {
    const callService = async () => {
        setShowLoading(true);
        const data = await serviceProcess(setShowLoading);
        setShowLoading(false);
        setData(data);
    }
    return [callService];
};
export default useService;
