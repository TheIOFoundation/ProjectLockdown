resource "azurerm_storage_container" "example" {
  name                  = "thisisanexample"
  storage_account_name  = "automationpld"
  container_access_type = "private"
}