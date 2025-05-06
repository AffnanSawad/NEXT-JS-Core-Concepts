
const WithFooter = ({children}) => {
    return (
        <div>
            {children}

            <footer className="text-4xl mt-10 underline text-black"> Footer . @copyRight 2025</footer>
        </div>
    );
};

export default WithFooter;