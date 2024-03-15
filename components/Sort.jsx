const Sort = ({sortBy, sortOrder, handleSortChange}) => {
    const handleSortByChange = (e) => {
        handleSortChange(e.target.value, sortOrder);
      };
    
      const handleSortOrderChange = (e) => {
        handleSortChange(sortBy, e.target.value);
      };
return (
    <div>
      <select name="sortBy" value={sortBy} onChange={handleSortByChange} >
        <option value="comment_count">Sort by comment count</option>
        <option value="created_at">Sort by date</option>
        <option value="votes">Sort by votes</option>
      </select>
      <select name="sortOrder" value={sortOrder} onChange={handleSortOrderChange}>
        <option value="asc">Ascending</option>
        <option value="desc">Descending</option>
      </select>
    </div>
  );
};
export default Sort;
