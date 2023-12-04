import { ComponentProps } from '../types';

export interface CardProps extends ComponentProps {
  cardHeader?: any;
  cardImage?: JSX.Element;
  cardText?: string;
  cardFooter?: any;
}
