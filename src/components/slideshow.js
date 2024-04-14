"use client"; 

import React from 'react';
import Image from 'next/image'
import config from '@/config';

class Slideshow extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            currentSlide: 0,
            imageHeight: null
        };
    }

    nextSlide = () => {
        this.setState(prevState => ({
            currentSlide: (prevState.currentSlide + 1) % this.props.images.length
        }));
    };

    prevSlide = () => {
        this.setState(prevState => ({
            currentSlide: prevState.currentSlide === 0 ? this.props.images.length - 1 : prevState.currentSlide - 1
        }));
    };

    render() {
        const { images } = this.props;
        const { currentSlide } = this.state;

        return (
            <div className="slideshow-container" style={{ position: 'relative', textAlign: 'center', maxHeight: '400px' }}>
            <div className="slides" style={{ display: 'inline-block', position: 'relative' }}>
                {images && images.length > 0 && images.map((image, index) => (
                <div
                key={index}
                className={index === currentSlide ? "slide fade-in" : "slide fade-out"}
                style={{
                display: index === currentSlide ? 'block' : 'none',
                textAlign: 'center'
                }}
                >
                <Image
                src={`${config.api}${image.attributes.url}`}
                alt={`Slide ${index + 1}`}
                style={{ maxWidth: '100%', maxHeight: '100%', margin: 'auto' }}
                height = '400'
                width = '600'
                />
                </div>
                ))}
            </div>
                {images && images.length > 0 && (
                    <ButtonContainer>
                    <button className="prev" onClick={this.prevSlide}>&lt;</button>
                    <button className="next" onClick={this.nextSlide}>&gt;</button>
                    </ButtonContainer>
                )}
            </div>
        );
    }
}

const ButtonContainer = ({ children }) => (
    <div style={{ position: 'absolute', bottom: '20px', left: '50%', transform: 'translateX(-50%)' }}>
        {children}
    </div>
);

export default Slideshow;
