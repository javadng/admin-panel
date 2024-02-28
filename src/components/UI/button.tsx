interface ButtnProps {
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  children: React.ReactNode;
  classes?: string;
}

const Button: React.FC<ButtnProps> = ({ children, onClick, classes }) => {
  return (
    <button onClick={onClick} className={classes}>
      {children}
    </button>
  );
};

export default Button;
