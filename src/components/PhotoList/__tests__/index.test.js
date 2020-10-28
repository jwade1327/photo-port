import React from 'react'
import { render, cleanup } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import PhotoList from '..'

afterEach(cleanup)

describe('PhotoList is component', () => {
    it('renders', () => {
        render(<PhotoList />);
    });

    it('renders', () => {
        const { asFragment } = render(<PhotoList />)
        expect(asFragment()).toMatchSnapShot()
    });
})