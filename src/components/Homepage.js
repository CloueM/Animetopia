import React from 'react';
import { useGlobalContext } from '../context/global';
import styles from '../styling/homepageStyle';

const Homepage = () => {
    const { homepageData, loading } = useGlobalContext();

    if (loading) {
        return <div>Loading...</div>;
    }

    const { slides = [], trend = [], UpcomingAnime = [] } = homepageData;

    const showSlide = (index) => {
        const slider = document.getElementById('slider');
        slider.style.transform = `translateX(-${index * 100}%)`;
    };

    const nextSlide = () => {
        showSlide((currentSlide + 1) % totalSlides);
    };

    const prevSlide = () => {
        showSlide((currentSlide - 1 + totalSlides) % totalSlides);
    };

    const totalSlides = slides.length;
    let currentSlide = 0;

    setInterval(nextSlide, 5000);

    return (
        <div>
            {/* Slides Section */}
            <section style={styles.section}>
                <h2 style={styles.sectionTitle}>Spotlight</h2>
                <div className="relative">
                    <div className="overflow-hidden">
                        <div className="flex transition-transform duration-500 ease-in-out" id="slider">
                        {slides.map((slide, index) => (
                            <div key={index} className="min-w-full relative">
                                <img src={slide.imageAnime} alt={slide.name} className="w-full h-auto rounded-lg" />
                                <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white p-4">
                                    <h2 className="text-2xl font-bold">{slide.name}</h2>
                                    <p className="mt-2">{slide.spotlight}</p>
                                </div>
                            </div>
                        ))}
                        </div>
                    </div>
                    <div className="absolute top-1/2 transform -translate-y-1/2 left-4">
                        <button onClick={prevSlide} className="bg-zinc-700 p-2 rounded-full">❮</button>
                    </div>
                    <div className="absolute top-1/2 transform -translate-y-1/2 right-4">
                        <button onClick={nextSlide} className="bg-zinc-700 p-2 rounded-full">❯</button>
                    </div>
                </div>
            </section>

            {/* Trending Section */}
            <section style={styles.section}>
                <h2 style={styles.sectionTitle}>Trending Now</h2>
                <div style={styles.scrollContainer}>
                    {trend.slice(0, 5).map((anime, index) => (
                        <div key={index} style={styles.animeItem}>
                            <img src={anime.imgAni} alt={anime.name} style={styles.animeImage} />
                            <p>{anime.name}</p>
                            <p>Ranking: {anime.ranking}</p>
                        </div>
                    ))}
                </div>
                <button style={styles.viewMoreButton}>View More</button>
            </section>

            {/* Upcoming Anime Section */}
            <section style={styles.section}>
                <h2 style={styles.sectionTitle}>Upcoming</h2>
                <div style={styles.scrollContainer}>
                    {UpcomingAnime.map((anime, index) => (
                        <div key={index} style={styles.animeItem}>
                            <img src={anime.imgAnime} alt={anime.name} style={styles.animeImage} />
                            <p>{anime.name}</p>
                            <p>Release: {anime.release}</p>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    );
};

export default Homepage;
