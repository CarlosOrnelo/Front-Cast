function Marker({active}) {

    const colorRed = '#F43E37';
    const colorGray = '#A8A8A8';

    return (
        <div className={'sidebar-marker' + '-' + active}>
            <svg width='8' height='46' viewBox="1 0 8 54">
                <path 
                    fill={active ? colorRed : colorGray}
                    d="M0,0 C0,0 4.14113188e-13,2 3,2 C4.75181535,2 5,2 5,2 L5.00860596,2 C6.66070727,2 8,3.34205759 8,4.99139404 L8,5 L8,49 L8,49.008606 C8,50.6607073 6.65794241,52 5.00860596,52 L5,52 C5,52 5,52 3,52 C1,52 0,54 0,54 L0,0 Z"
                >
                </path>
            </svg>
        </div>
    )
};

export default Marker;