export const serviceProcess = async (setShowLoading) => {
    await new Promise(resolve => setTimeout(resolve, 5000));
    return 'Success'
};

