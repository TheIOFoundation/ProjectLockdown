terraform {
  required_providers {
    azurerm = {
      source = "hashicorp/azurerm"
      version = "~> 2.65"
    }
  }

  required_version = ">= v1.0.3"
}

provider "azurerm" {
  features {}
}

backend "remote" {
  organization = "TheIOFoundation"
  workspaces {
    name = "Development"
  }
}
