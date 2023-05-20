import React from 'react';
import { motion as m } from 'framer-motion';

const PrivacyPolicy = () => {
    return (
        <m.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="w-100 bg-white py-5 ps-5">
            <h4>Privacy Policy</h4>
            <h6>Paragraph</h6>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem, eveniet cumque ipsa sequi facilis cum cupiditate, sed, velit optio est voluptates! Iusto nam illo voluptas voluptates, recusandae nihil quod suscipit.</p>
            <h6>Paragraph</h6>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem, eveniet cumque ipsa sequi facilis cum cupiditate, sed, velit optio est voluptates! Iusto nam illo voluptas voluptates, recusandae nihil quod suscipit.</p>
            <h6>Paragraph</h6>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem, eveniet cumque ipsa sequi facilis cum cupiditate, sed, velit optio est voluptates! Iusto nam illo voluptas voluptates, recusandae nihil quod suscipit.</p>
            <h6>Paragraph</h6>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem, eveniet cumque ipsa sequi facilis cum cupiditate, sed, velit optio est voluptates! Iusto nam illo voluptas voluptates, recusandae nihil quod suscipit.</p>
            <h6>Paragraph</h6>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem, eveniet cumque ipsa sequi facilis cum cupiditate, sed, velit optio est voluptates! Iusto nam illo voluptas voluptates, recusandae nihil quod suscipit.</p>
        </m.div>
    );
}

export { PrivacyPolicy };
