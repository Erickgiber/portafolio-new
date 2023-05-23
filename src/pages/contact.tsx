import { Icon } from '@iconify/react';
import { HeadFC, Link } from 'gatsby';
import * as React from 'react';
import '../shared/styles/index.scss';
import { MetaHTML } from '../shared/ui/MetaHTML';
import { Wrapper } from "../shared/ui/Wrapper";

const ContactPage = () => {
    return (
        <Wrapper>
            <main className="main-contact">
                <div>
                    <h2 className='title'> Contact me </h2>
                    <div className="contacts">
                        <p>
                            <Icon icon="line-md:email-twotone" />
                            <span>Email:</span>
                            <strong> erickgiber7@gmail.com </strong>
                        </p>
                        <p>
                            <Icon icon="ic:baseline-phone" />
                            <span>Phone:</span>
                            <strong> +58 412-020-4257 </strong>
                        </p>
                        <p>
                            <Icon icon="ant-design:linkedin-outlined" />
                            <span>Linkedin:</span>
                            <Link target='_blank' to='https://linkedin.com/in/erickgiber'> Erick Ramirez </Link>
                        </p>
                        <p>
                            <Icon icon="bi:whatsapp" />
                            <span>Whatsapp:</span>
                            <Link target='_blank' to='https://wa.link/wo1hx3'> Erick Ramirez </Link>
                        </p>
                    </div>
                </div>
            </main>
        </Wrapper>
    );
};

export default ContactPage;

export const Head: HeadFC = () => (
    <MetaHTML>
        <title> Contact me | Erick Ramirez </title>
    </MetaHTML>
);
