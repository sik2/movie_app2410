function SearBox({ keyword, onChangeKeyword }) {
    return (
        <div className="text-black">
            <div>
                <div>🔍</div>
                <input type="text" value={keyword} onChange={onChangeKeyword} />
            </div>
        </div>
    )
}

export default SearBox
