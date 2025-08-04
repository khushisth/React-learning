import { FiMoreVertical } from 'react-icons/fi';

/**
 * Versatile Card component for the HRMS application
 * Supports multiple variants: default, employee, project, notification, and action cards
 */
export default function Card({
  // Content props
  title,
  subtitle,
  description,
  children,

  // Visual props
  variant = 'default',
  size = 'medium',
  image,
  avatar,
  icon,
  badge,

  // Interactive props
  onClick,
  onMenuClick,
  href,
  disabled = false,

  // Status props
  status,
  priority,

  // Additional props
  className = '',
  showMenu = false,
  ...props
}) {
  // Base styles for all card variants
  const baseStyles = "bg-white rounded-lg shadow-md hover:shadow-lg transition-all duration-300 overflow-hidden";

  // Size variants
  const sizeStyles = {
    small: "p-4",
    medium: "p-6",
    large: "p-8"
  };

  // Card variants with specific styling
  const variantStyles = {
    default: "border border-gray-200 hover:border-gray-300",
    employee: "border-l-4 border-l-blue-500 hover:border-l-blue-600",
    project: "border-l-4 border-l-green-500 hover:border-l-green-600",
    notification: "border-l-4 border-l-yellow-500 hover:border-l-yellow-600",
    action: "border border-gray-200 hover:border-blue-300 hover:bg-blue-50 cursor-pointer transform hover:-translate-y-1",
    stats: "bg-gradient-to-br from-blue-50 to-indigo-100 border border-blue-200 hover:from-blue-100 hover:to-indigo-200"
  };

  // Status color mapping
  const statusColors = {
    active: "bg-green-100 text-green-800",
    inactive: "bg-red-100 text-red-800",
    pending: "bg-yellow-100 text-yellow-800",
    completed: "bg-blue-100 text-blue-800",
    draft: "bg-gray-100 text-gray-800"
  };

  // Priority color mapping
  const priorityColors = {
    high: "bg-red-100 text-red-800",
    medium: "bg-yellow-100 text-yellow-800",
    low: "bg-green-100 text-green-800"
  };

  // Combine all styles
  const cardClasses = `
    ${baseStyles}
    ${sizeStyles[size]}
    ${variantStyles[variant]}
    ${disabled ? 'opacity-50 cursor-not-allowed' : ''}
    ${onClick || href ? 'cursor-pointer' : ''}
    ${className}
  `.trim();

  // Handle click events
  const handleClick = (e) => {
    if (disabled) return;
    if (href) {
      window.location.href = href;
      return;
    }
    if (onClick) {
      onClick(e);
    }
  };

  // Handle menu click
  const handleMenuClick = (e) => {
    e.stopPropagation();
    if (onMenuClick) {
      onMenuClick(e);
    }
  };

  // Card content based on variant
  const renderCardContent = () => {
    switch (variant) {
      case 'employee':
        return (
          <div className="flex items-start space-x-4">
            {avatar && (
              <div className="flex-shrink-0">
                <img
                  src={avatar}
                  alt={title}
                  className="w-12 h-12 rounded-full object-cover border-2 border-gray-200"
                />
              </div>
            )}
            <div className="flex-1 min-w-0">
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-semibold text-gray-900 truncate">{title}</h3>
                {showMenu && (
                  <button
                    onClick={handleMenuClick}
                    className="text-gray-400 hover:text-gray-600 p-1 rounded-full hover:bg-gray-100"
                  >
                    <FiMoreVertical className="w-4 h-4" />
                  </button>
                )}
              </div>
              {subtitle && (
                <p className="text-sm text-gray-600 mb-2">{subtitle}</p>
              )}
              {description && (
                <p className="text-sm text-gray-500 line-clamp-2">{description}</p>
              )}
              <div className="flex items-center space-x-2 mt-3">
                {status && (
                  <span className={`px-2 py-1 text-xs font-medium rounded-full ${statusColors[status] || statusColors.draft}`}>
                    {status.charAt(0).toUpperCase() + status.slice(1)}
                  </span>
                )}
                {badge && (
                  <span className="px-2 py-1 text-xs font-medium bg-gray-100 text-gray-800 rounded-full">
                    {badge}
                  </span>
                )}
              </div>
            </div>
          </div>
        );

      case 'project':
        return (
          <div>
            {image && (
              <div className="mb-4">
                <img
                  src={image}
                  alt={title}
                  className="w-full h-32 object-cover rounded-md"
                />
              </div>
            )}
            <div className="flex items-center justify-between mb-2">
              <h3 className="text-lg font-semibold text-gray-900">{title}</h3>
              {showMenu && (
                <button
                  onClick={handleMenuClick}
                  className="text-gray-400 hover:text-gray-600 p-1 rounded-full hover:bg-gray-100"
                >
                  <FiMoreVertical className="w-4 h-4" />
                </button>
              )}
            </div>
            {subtitle && (
              <p className="text-sm text-gray-600 mb-2">{subtitle}</p>
            )}
            {description && (
              <p className="text-sm text-gray-500 mb-3">{description}</p>
            )}
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                {status && (
                  <span className={`px-2 py-1 text-xs font-medium rounded-full ${statusColors[status] || statusColors.draft}`}>
                    {status.charAt(0).toUpperCase() + status.slice(1)}
                  </span>
                )}
                {priority && (
                  <span className={`px-2 py-1 text-xs font-medium rounded-full ${priorityColors[priority]}`}>
                    {priority.charAt(0).toUpperCase() + priority.slice(1)}
                  </span>
                )}
              </div>
              {badge && (
                <span className="text-xs text-gray-500">{badge}</span>
              )}
            </div>
          </div>
        );

      case 'notification':
        return (
          <div className="flex items-start space-x-3">
            {icon && (
              <div className="flex-shrink-0 mt-1">
                <div className="w-8 h-8 bg-yellow-100 rounded-full flex items-center justify-center">
                  {icon}
                </div>
              </div>
            )}
            <div className="flex-1 min-w-0">
              <h3 className="text-sm font-medium text-gray-900">{title}</h3>
              {description && (
                <p className="text-sm text-gray-500 mt-1">{description}</p>
              )}
              {badge && (
                <span className="text-xs text-gray-400 mt-2 block">{badge}</span>
              )}
            </div>
          </div>
        );

      case 'stats':
        return (
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-2xl font-bold text-gray-900">{title}</h3>
              {subtitle && (
                <p className="text-sm text-gray-600">{subtitle}</p>
              )}
              {description && (
                <p className="text-xs text-gray-500 mt-1">{description}</p>
              )}
            </div>
            {icon && (
              <div className="bg-white p-3 rounded-lg shadow-sm">
                <div className="text-2xl text-blue-600">
                  {icon}
                </div>
              </div>
            )}
          </div>
        );

      default:
        return (
          <div>
            <div className="flex items-center justify-between mb-2">
              {title && (
                <h3 className="text-lg font-semibold text-gray-900">{title}</h3>
              )}
              {showMenu && (
                <button
                  onClick={handleMenuClick}
                  className="text-gray-400 hover:text-gray-600 p-1 rounded-full hover:bg-gray-100"
                >
                  <FiMoreVertical className="w-4 h-4" />
                </button>
              )}
            </div>
            {subtitle && (
              <p className="text-sm text-gray-600 mb-2">{subtitle}</p>
            )}
            {description && (
              <p className="text-sm text-gray-500 mb-3">{description}</p>
            )}
            {children}
            {(status || badge) && (
              <div className="flex items-center space-x-2 mt-3">
                {status && (
                  <span className={`px-2 py-1 text-xs font-medium rounded-full ${statusColors[status] || statusColors.draft}`}>
                    {status.charAt(0).toUpperCase() + status.slice(1)}
                  </span>
                )}
                {badge && (
                  <span className="px-2 py-1 text-xs font-medium bg-gray-100 text-gray-800 rounded-full">
                    {badge}
                  </span>
                )}
              </div>
            )}
          </div>
        );
    }
  };

  return (
    <div
      className={cardClasses}
      onClick={handleClick}
      {...props}
    >
      {renderCardContent()}
    </div>
  );
}