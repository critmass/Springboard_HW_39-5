import React from 'react';
import { render, screen } from '@testing-library/react';
import Card from './Card';

it("renders without crashing", () => {
    render(<Card />)
})

it("renders as the snapshot", () => {
    const { asFragment } = render(<Card
        caption="Photo by Richard Pasquarella on Unsplash"
        src="./image1.jpg"
        currNum={1}
        totalNum={3}
    />)
    expect(asFragment()).toMatchSnapshot()
})