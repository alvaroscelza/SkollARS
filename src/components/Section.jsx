const Section = ({ id, className = "", backgroundColor, children }) => {
    const bgStyle = backgroundColor === 'gray' ? { backgroundColor: '#f7f7f7' } : {};
    const sectionClassName = `py-8 border-t border-gray-200 ${backgroundColor === 'gray' ? '' : 'bg-white'} ${className}`;
    
    return (
        <section id={id} className={sectionClassName} style={bgStyle}>
            {children}
        </section>
    );
};

export default Section;
