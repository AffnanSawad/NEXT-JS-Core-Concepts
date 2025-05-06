import cssFile from './Blog.module.css'

const page = () => {
    return (
        <div>
            <h1 className='text-4xl font-bold text-blue-600'>This Is Blog !</h1>

            <h1 className={cssFile.color}> In build CSS</h1>
        </div>
    );
};

export default page;