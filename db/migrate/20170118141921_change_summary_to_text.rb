class ChangeSummaryToText < ActiveRecord::Migration[5.0]
  def change
    change_column :people, :summary, :text
  end
end
