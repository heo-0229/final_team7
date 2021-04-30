{
  /* {is_category.length >= 1 ? (
          is_category.map((c) => {
            if (c == "is_cafe") {
              //안에 있냐? 로 봐야할듯?
              return (
                <SelectedBtn
                  onClick={(e) => {
                    e.preventDefault();
                    e.stopPropagation();
                  }}
                >
                  카페
                </SelectedBtn>
              );
            }
          })
        ) : (
          <Btn
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              dispatch(categoryActions.getCategory("is_cafe"));
            }}
          >
            카페
          </Btn>
        )} */
}

{
  /* {is_category.length >= 1 ? (
          is_category.map((c) => {
            if (c == "is_night") {
              return (
                <SelectedBtn
                  onClick={(e) => {
                    e.preventDefault();
                    e.stopPropagation();
                  }}
                >
                  야경
                </SelectedBtn>
              );
            }
          })
        ) : (
          <Btn
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              dispatch(categoryActions.getCategory("is_night"));
            }}
          >
            야경
          </Btn>
        )} */
}
