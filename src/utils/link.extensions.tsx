import { Link } from '../components/typography';
import React from 'react';

export const mapLinkObjectToLinks = (object: { [key: string]: any }) =>
    Object.keys(object).map((key: string) => (
        <Link key={object[key]} href={object[key]}>
            {key}
        </Link>
    ));
