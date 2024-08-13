import {useEffect} from 'react';

const Even = () => {
    useEffect(() => {
        // Cleanup, 정리 함수
        return () => {
            console.log('unmount');
        };
    }, []);

    return (
        <div>Even</div>
    );
};

export default Even;