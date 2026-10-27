export default function Button({ as: Tag = "button", variant = "orange", className = "", children, ...rest }) {
  return <Tag className={`btn btn-${variant} ${className}`} {...rest}>{children}</Tag>;
}
