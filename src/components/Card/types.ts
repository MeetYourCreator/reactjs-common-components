import { ComponentProps } from '../types';

export interface CardProps extends ComponentProps {
  cardHeader?: any;
  cardImage?: any;
  cardImageAlt?: string;
  cardText?: string;
  children?: any;
  cardFooter?: any;
}
