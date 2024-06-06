const styles = {
    section: {
        marginBottom: '40px',
        padding: '20px',
    },
    sectionTitle: {
        marginBottom: '20px',
        fontSize: '24px',
        fontWeight: 'bold',
    },
    scrollContainer: {
        display: 'flex',
        overflowX: 'auto',
        padding: '10px 0',
    },
    animeItem: {
        flex: '0 0 auto',
        marginRight: '20px',
        textAlign: 'center',
        color: '#fff',
    },
    animeImage: {
        width: '150px',
        height: '200px',
        borderRadius: '10px',
        marginBottom: '10px',
    },
    viewMoreButton: {
        marginTop: '10px',
        padding: '10px 20px',
        backgroundColor: '#3a3a3a',
        color: '#fff',
        border: 'none',
        borderRadius: '5px',
        cursor: 'pointer',
    },
    spotlightContainer: {
        position: 'relative',
        width: '100%',
        height: '400px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        overflow: 'hidden',
        borderRadius: '15px',
        backgroundColor: '#000',
        color: '#fff',
        marginBottom: '40px',
    },
    spotlightImage: {
        position: 'absolute',
        width: '100%',
        height: '100%',
        top: 0,
        left: 0,
        objectFit: 'cover',
        opacity: 0.7,
    },
    spotlightText: {
        position: 'relative',
        zIndex: 2,
        fontSize: '36px',
        fontWeight: 'bold',
        textAlign: 'center',
    }
};

export default styles;
