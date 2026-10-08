import './FilterTabs.css';

/**
 * Accessible category filter tabs (used by Services and Gallery).
 */
function FilterTabs({ items, active, onChange, label = 'Filter by category', counts }) {
  return (
    <div className="filter-tabs" role="group" aria-label={label}>
      {items.map((item) => {
        const isActive = item.id === active;
        return (
          <button
            key={item.id}
            type="button"
            className={`filter-tabs__btn ${isActive ? 'is-active' : ''}`}
            aria-pressed={isActive}
            onClick={() => onChange(item.id)}
          >
            {item.label}
            {counts && <span className="filter-tabs__count">{counts[item.id] ?? 0}</span>}
          </button>
        );
      })}
    </div>
  );
}

export default FilterTabs;
