import image from '../../assets/images/profile.png'
const Header = () => {
    return (
        <div className='flex justify-between border-b-2 items-center mb-2'>
            <h1 className='font-bold text-2xl'>Knowledge Cafe</h1>
            <img className='mb-3 mt-3' src={image} alt="" />

            
        </div>
    );
};

export default Header;